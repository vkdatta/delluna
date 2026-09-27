export const name="feedback";
export const id="dl_30a0d6085c89a3ad1d56";
export const url=new URL("../icons/feedback.svg?v=3b0ffcb46d6e9f72ed53d5b9d2337b864403e72eb08c1322838219d4bf3c85bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
