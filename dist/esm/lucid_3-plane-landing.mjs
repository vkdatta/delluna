export const name="lucid_3-plane-landing";
export const id="dl_3002827e51264fa384ac";
export const url=new URL("../icons/lucid_3-plane-landing.svg?v=dfa919884ce3f4856319072706d3e31be4199b772834a5e9ad6c178a78f6593b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
