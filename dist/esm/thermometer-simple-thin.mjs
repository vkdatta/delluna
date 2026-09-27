export const name="thermometer-simple-thin";
export const id="dl_e924943bb3bc1c961d5f";
export const url=new URL("../icons/thermometer-simple-thin.svg?v=e694e350d92dd86794e67eecaaa722a76021b58f0f7ec75eb61bfb2730562d42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
