export const name="delivery_truck_bolt";
export const id="dl_902cee26f2c58159c7e6";
export const url=new URL("../icons/delivery_truck_bolt.svg?v=097540900eeed29452b7642e018856ce018209c2c122641e5ea62d20353311ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
