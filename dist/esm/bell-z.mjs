export const name="bell-z";
export const id="dl_07e9e0cacbd94c24a434";
export const url=new URL("../icons/bell-z.svg?v=2b5b3c23424ef1b39c096212d952c13403411b33adcb4da3bc2b06b1c893242c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
