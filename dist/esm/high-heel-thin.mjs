export const name="high-heel-thin";
export const id="dl_e6a36290987c4fbb9b20";
export const url=new URL("../icons/high-heel-thin.svg?v=5a8989a87ff05ff294ea2f97dee1e1cf637ed9ee28e829d4666842852aa83ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
