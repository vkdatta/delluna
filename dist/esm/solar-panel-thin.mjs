export const name="solar-panel-thin";
export const id="dl_28b699de564102588fd1";
export const url=new URL("../icons/solar-panel-thin.svg?v=efe680e67f0cc77f736f17fe57e26f25fd4754e2064f1a4846e1c06d75a1b156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
