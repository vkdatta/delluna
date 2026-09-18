export const name="snail";
export const id="dl_9593a5049054411db579";
export const url=new URL("../icons/snail.svg?v=33f4f76fd3cf6811d07cfe8ff6aa6f64b6b0ab9b33a177b6b6e61c648c6945cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
