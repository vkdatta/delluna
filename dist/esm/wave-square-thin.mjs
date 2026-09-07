export const name="wave-square-thin";
export const id="dl_ef8a869bbf134ef2ad86";
export const url=new URL("../icons/W/wave-square-thin.svg?v=8913f5e51f92edf33743f58e4cf659f2bce306bf2cbebcd4cc20fd0d88634793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
