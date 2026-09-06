export const name="fire-light";
export const id="dl_7af18bcb2ad749af86b1";
export const url=new URL("../icons/fire-light.svg?v=67181ec9aaddc4f4cb9adb0438856b60c8105787e1fca9bb2fe059cb62095131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
