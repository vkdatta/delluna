export const name="warning-circle-bold";
export const id="dl_a260fcd26cb08bd345b2";
export const url=new URL("../icons/warning-circle-bold.svg?v=4e3e4fcc80e070bcc72762eebdc658faa7136e0edf0c3e31d52e197cafa67f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
