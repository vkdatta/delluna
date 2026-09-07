export const name="text-superscript-thin";
export const id="dl_ac8897af60c349a0b427";
export const url=new URL("../icons/T/text-superscript-thin.svg?v=ab826c6880ae59826e4db8adb4973f9697f78f902288fe0f6704d5b29cb99e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
