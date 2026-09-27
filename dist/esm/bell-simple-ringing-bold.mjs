export const name="bell-simple-ringing-bold";
export const id="dl_4b8e188e6ff3402fab05";
export const url=new URL("../icons/bell-simple-ringing-bold.svg?v=b06a2d3e43270b56f446915c311b26aef0afa04cfeea20d83edd0d19e57adc87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
