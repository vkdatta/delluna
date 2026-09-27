export const name="phone_paused";
export const id="dl_63c2974a7959c4edbaf1";
export const url=new URL("../icons/phone_paused.svg?v=20be4b20edcc2791d235f5c907810d62a325c598313f5f3ac63846eca392b177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
