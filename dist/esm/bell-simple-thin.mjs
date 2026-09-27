export const name="bell-simple-thin";
export const id="dl_7c2fefa87f61413fbf68";
export const url=new URL("../icons/bell-simple-thin.svg?v=fc5cb51131a3c1138f59a3ad0968ebe3dacaa7bae42b55a104d177b8a65b4d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
