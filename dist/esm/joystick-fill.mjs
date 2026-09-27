export const name="joystick-fill";
export const id="dl_8391b06b652a623a9353";
export const url=new URL("../icons/joystick-fill.svg?v=7fcfae3b85bd27bb255bd6caaae1e36c8c1106e1ef644bd388055c409004ef72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
