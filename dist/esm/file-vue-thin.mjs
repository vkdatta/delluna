export const name="file-vue-thin";
export const id="dl_313d2d20414d4d49b59b";
export const url=new URL("../icons/file-vue-thin.svg?v=12fa77a21c8b22282d67fe409cb8362a90cfa497a054940fb6dedc6793c691fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
