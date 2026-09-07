export const name="windows-logo-thin";
export const id="dl_d88bcf3290b34753a0b7";
export const url=new URL("../icons/W/windows-logo-thin.svg?v=d213a97e63c5c539d508ee6d20e752c7bb3c64168870cad7367b38211ce185dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
