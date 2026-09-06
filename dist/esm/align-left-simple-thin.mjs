export const name="align-left-simple-thin";
export const id="dl_d0988c60207a41c8806b";
export const url=new URL("../icons/align-left-simple-thin.svg?v=9c80a8e882f58705d0ccb9ea3cc6b6029c7f20006fc42d70edd02ae596abbbd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
