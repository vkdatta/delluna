export const name="view_timeline-fill";
export const id="dl_0db53d10e3440274f876";
export const url=new URL("../icons/view_timeline-fill.svg?v=18e25bdf3c60880721192c22325a66d461d9b5805db43d5d75da3890d0fb5bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
