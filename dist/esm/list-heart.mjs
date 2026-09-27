export const name="list-heart";
export const id="dl_ecd49ebf9e854e55b041";
export const url=new URL("../icons/list-heart.svg?v=9f65381c574e0e53668c399e7c6ee0d13c610db9f51d2d32532ba004f04bf61f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
