export const name="keyboard-bold";
export const id="dl_cc9a3271779946eaa18c";
export const url=new URL("../icons/keyboard-bold.svg?v=ea6584059a9315f16288592548c595682bc7493079b2a9966495e76e5e894d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
