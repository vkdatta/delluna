export const name="gamepad_up-fill";
export const id="dl_1b2ac504b1885ad03dc8";
export const url=new URL("../icons/gamepad_up-fill.svg?v=e4b0d3973959120d8e463e233fa2da29cd15f173cf33c84d6d9ce7d400385242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
