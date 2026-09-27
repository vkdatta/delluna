export const name="joystick-fill";
export const id="dl_89a95a2c1764c6c997d6";
export const url=new URL("../icons/joystick-fill.svg?v=ae69bfc7284cc1f37eeec4c29135f1a744306cba6eec1ccbbad17778884d3532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
