export const name="border_style-fill";
export const id="dl_718eba4f37c370f44c5b";
export const url=new URL("../icons/border_style-fill.svg?v=4648675ca13dadd682c729962a1bc632cfbdbde2471a53ceda139beee6e837f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
