export const name="bell-simple-slash-bold";
export const id="dl_25feac8c19034981bb88";
export const url=new URL("../icons/bell-simple-slash-bold.svg?v=37a720494f0a1dcb9fe112c9817d3d5fbe3ddcb6aa5db8783e738349901ede22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
