export const name="suitcase-rolling-thin";
export const id="dl_5e7db6aa15a1ce84110d";
export const url=new URL("../icons/suitcase-rolling-thin.svg?v=e0beb87adb87dcd0bf60f5ab1311db8f829c2cb29b71d23800372132231de2e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
