export const name="warning";
export const id="dl_10a42688b44702a8afec";
export const url=new URL("../icons/warning.svg?v=30fb6114dd7650414ceeae8388a8e39c09c7ece3d89e449171634e0a31a8ed86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
