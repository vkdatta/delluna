export const name="bell-simple-thin";
export const id="dl_7c2fefa87f61413fbf68";
export const url=new URL("../icons/bell-simple-thin.svg?v=91b95336c532bd5f8425b11d09d5abe53eeab6a6ac9451eb92e06f9c51bccef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
