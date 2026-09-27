export const name="lucid_3-panda";
export const id="dl_2a9d628d245b4e41ab91";
export const url=new URL("../icons/lucid_3-panda.svg?v=46ee36fe8e94a2aeb4237b9c561d0c668bb4f0af6e5b95dfabe2bcde6a4020e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
