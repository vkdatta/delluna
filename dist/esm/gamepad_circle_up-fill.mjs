export const name="gamepad_circle_up-fill";
export const id="dl_87d2b4ee86f97c095904";
export const url=new URL("../icons/gamepad_circle_up-fill.svg?v=328518cddd21c872c37d49729d9c7002ae0cd25ec7b1bd67ebbdd2fd45ed0fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
