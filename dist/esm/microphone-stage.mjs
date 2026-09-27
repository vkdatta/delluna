export const name="microphone-stage";
export const id="dl_6b7998aee0054900a31e";
export const url=new URL("../icons/microphone-stage.svg?v=e9eea9bbf7e4e100114578c4935bc4c64fad7d74c6ee25eb9ad8ce9011e017d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
