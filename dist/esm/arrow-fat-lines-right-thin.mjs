export const name="arrow-fat-lines-right-thin";
export const id="dl_429149402708437cb846";
export const url=new URL("../icons/arrow-fat-lines-right-thin.svg?v=2ab0362deaa1910fc795ebc7faf558bd7ce06f646875c437a51fcee516e51f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
