export const name="snowing_heavy-fill";
export const id="dl_babfbf75c339a641c2ab";
export const url=new URL("../icons/snowing_heavy-fill.svg?v=786b10ddc054aa23bf027e0379e94d60f5c31a3e629cdac1710b736dcb61c904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
