export const name="github-logo-thin";
export const id="dl_e650e9268da64476ace0";
export const url=new URL("../icons/github-logo-thin.svg?v=2718043cd356fd49809f58a3039c4d93609c57c9fe1ff938e4636ba83e0c9cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
