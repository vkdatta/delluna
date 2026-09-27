export const name="arrow-fat-up";
export const id="dl_e9eb6810abe94fc4ab09";
export const url=new URL("../icons/arrow-fat-up.svg?v=4c2c63ea8bd5f3c7a530ecf3e3bb454841b1cd7e7805866b042cb48fbfd3651b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
