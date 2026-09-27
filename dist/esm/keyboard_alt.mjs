export const name="keyboard_alt";
export const id="dl_5325b43a21d142492679";
export const url=new URL("../icons/keyboard_alt.svg?v=dcec87af5c4cf267ea82adbb6f3288ec549bcef1db9095ee4fd6013ec94aaecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
