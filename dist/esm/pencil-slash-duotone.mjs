export const name="pencil-slash-duotone";
export const id="dl_01a242d451b446b9a64a";
export const url=new URL("../icons/pencil-slash-duotone.svg?v=53d46326a46da07d960ad806121b5e36693f0e1f6ecf063b91b33249c7efa602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
