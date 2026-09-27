export const name="tip-jar-fill";
export const id="dl_f03f2e258daa788a9905";
export const url=new URL("../icons/tip-jar-fill.svg?v=0d6df38718a63697f7229368471f3be50453f01bd91d18229ba2b055756743cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
