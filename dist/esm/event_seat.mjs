export const name="event_seat";
export const id="dl_96c400cb8ed54e79a04f";
export const url=new URL("../icons/event_seat.svg?v=fbe69f79117d7699ba97c34c6743fd6589f4a05b0b8a62288969ff393cef938c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
