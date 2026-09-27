export const name="reset_brightness";
export const id="dl_d35bdb43b61ee06041ee";
export const url=new URL("../icons/reset_brightness.svg?v=e0d41a4b7c95f285d65fbcde3a753cefaa16caab7986c85bc5f4bec4ed5b9308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
