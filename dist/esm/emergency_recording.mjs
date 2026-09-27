export const name="emergency_recording";
export const id="dl_48940c304cde9c618fb7";
export const url=new URL("../icons/emergency_recording.svg?v=a05e370a57734e485ef3a0a60e229ebfbc05e7daf2f4c72af2270d2a14e3a953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
