export const name="textbox-thin";
export const id="dl_e13ca7cac304b9014e9f";
export const url=new URL("../icons/textbox-thin.svg?v=ea0af3621cde6a682314efcc6fb0ca07db4d4ae2bf6185ec9ba0ea1330e508da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
