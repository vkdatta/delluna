export const name="lucid_3-scroll";
export const id="dl_77dff2f7b94e4051b4f6";
export const url=new URL("../icons/lucid_3-scroll.svg?v=34c27fa003c71a53b08b206c46dac4dd89d0ba65faa862d61305898bcd4657aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
