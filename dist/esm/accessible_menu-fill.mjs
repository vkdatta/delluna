export const name="accessible_menu-fill";
export const id="dl_1336eec7aed58f01f43b";
export const url=new URL("../icons/accessible_menu-fill.svg?v=ebf4808632a03df5f198e9e8cf912ec2c36513daa75a8b030d4326ae2259d61b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
