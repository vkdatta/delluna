export const name="lucid_2-cuboid";
export const id="dl_83790abbd2c64ce08d2a";
export const url=new URL("../icons/lucid_2-cuboid.svg?v=f40db2208556d8be1b7c617825aeb977c193beb1c9ac5478c73453ab7bc6515c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
