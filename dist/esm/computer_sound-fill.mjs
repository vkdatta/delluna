export const name="computer_sound-fill";
export const id="dl_af429a9a5cdeb6b6af24";
export const url=new URL("../icons/computer_sound-fill.svg?v=619f20d708e1b42e30f52deb56608e6e7fb70fc23e84942b6fe108630124ef7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
