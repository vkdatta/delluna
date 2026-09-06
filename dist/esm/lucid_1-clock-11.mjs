export const name="lucid_1-clock-11";
export const id="dl_04e58e497cf043038d42";
export const url=new URL("../icons/lucid_1-clock-11.svg?v=5a34fc76fd2be89a98d0fa09137f2cf1e374b2d3dc2e40241ba9ebd540c837b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
