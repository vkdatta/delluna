export const name="center_focus_strong";
export const id="dl_933cb8e8b684bbc53d04";
export const url=new URL("../icons/center_focus_strong.svg?v=3ea682802682f6e7d9c2e8013fa68a8f5d8c7411b72c473c5eaf6d32ab902388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
