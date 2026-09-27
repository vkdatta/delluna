export const name="sip";
export const id="dl_096aba3dc88eddc31e18";
export const url=new URL("../icons/sip.svg?v=cc45c2dfda7fa25584b6fe1de6558fb4fde9c69eae896dbe63f3e63125fa4379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
