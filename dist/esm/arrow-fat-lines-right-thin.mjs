export const name="arrow-fat-lines-right-thin";
export const id="dl_429149402708437cb846";
export const url=new URL("../icons/arrow-fat-lines-right-thin.svg?v=ff99a5c4a266d4b8b730553dc47bdd69c69e0f28a16a542e2387c79f58dc0ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
