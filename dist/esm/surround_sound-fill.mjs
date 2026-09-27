export const name="surround_sound-fill";
export const id="dl_068c20a23dc37cbc3f5a";
export const url=new URL("../icons/surround_sound-fill.svg?v=0771c3edd4d3e57b0275397157b74c3649b10db6c5bf9e5bf55fad1e4565aee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
