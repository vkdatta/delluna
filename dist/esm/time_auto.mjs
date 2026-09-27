export const name="time_auto";
export const id="dl_53ee2c0b27509e0cdd3d";
export const url=new URL("../icons/time_auto.svg?v=b147a1b480b1dcccc8536648ee49153a70ec40a1d46aeb42e6c992d16286e37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
