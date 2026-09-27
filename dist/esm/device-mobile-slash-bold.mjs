export const name="device-mobile-slash-bold";
export const id="dl_a12e9ae7005b45f3b45f";
export const url=new URL("../icons/device-mobile-slash-bold.svg?v=cc35a8a8109b1c223895d36968fc6400573de9d7cdd1ab1af426190d98595a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
