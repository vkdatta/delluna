export const name="close_fullscreen";
export const id="dl_edfb6dac27213cb87a54";
export const url=new URL("../icons/close_fullscreen.svg?v=5142af208bcf6b44041bb42122c2fa403ba1bba3415e06312377aa9886e68bd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
