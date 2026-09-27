export const name="sliders-horizontal-thin";
export const id="dl_ba9c8e9d1663a89ca253";
export const url=new URL("../icons/sliders-horizontal-thin.svg?v=e99c03e60c788206b5684bb7df902f0458a4e94019c717d77799945296c80a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
