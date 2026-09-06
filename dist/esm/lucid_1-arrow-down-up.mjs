export const name="lucid_1-arrow-down-up";
export const id="dl_9f0e76fe266048768ad3";
export const url=new URL("../icons/lucid_1-arrow-down-up.svg?v=3dd1e96fde252dc070081acfb37948032bc70b8506b51504699abe1555b7c9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
